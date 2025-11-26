/**
 * Google Apps Script - Form Verilerini Google Sheets'e Kaydetme
 * 
 * Kullanım:
 * 1. Google Sheets'te yeni bir sayfa oluşturun
 * 2. Extensions > Apps Script menüsüne gidin
 * 3. Bu kodu yapıştırın
 * 4. Deploy > New deployment > Web app olarak deploy edin
 * 5. Web app URL'ini kopyalayın ve form submit fonksiyonunda kullanın
 */

function doPost(e) {
  try {
    // Google Sheets ID'nizi buraya yapıştırın
    // Sheets URL'sinden ID'yi alın: https://docs.google.com/spreadsheets/d/[BURASI_ID]/edit
    const SPREADSHEET_ID = 'BURAYA_SHEET_ID_YAPISTIRIN';
    const SHEET_NAME = 'Form Verileri'; // Sayfa adı
    
    // Gelen veriyi parse et (FormData veya JSON)
    let data = {};
    
    if (e.parameter) {
      // FormData ile gönderilmişse
      data = {
        fullName: e.parameter.fullName || '',
        grade: e.parameter.grade || '',
        examField: e.parameter.examField || '',
        phone: e.parameter.phone || '',
        email: e.parameter.email || '',
        date: e.parameter.date || '',
        time: e.parameter.time || '',
        code: e.parameter.code || '',
        notes: e.parameter.notes || ''
      };
    } else if (e.postData && e.postData.contents) {
      // JSON ile gönderilmişse
      data = JSON.parse(e.postData.contents);
    }
    
    // Sheets'i aç
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    // Eğer sayfa yoksa oluştur
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      // Başlıkları ekle
      const headers = [
        'Tarih',
        'Saat',
        'Ad Soyad',
        'Sınıf',
        'Hazırlanılan Alan',
        'Telefon',
        'E-posta',
        'Görüşme Tarihi',
        'Görüşme Saati',
        'Kod',
        'Özel Not'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      // Başlık satırını formatla
      sheet.getRange(1, 1, 1, headers.length)
        .setFontWeight('bold')
        .setBackground('#ffde59')
        .setFontSize(11);
    }
    
    // Yeni satır ekle
    const timestamp = new Date();
    const row = [
      Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'dd.MM.yyyy HH:mm:ss'),
      Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'HH:mm:ss'),
      data.fullName || '',
      data.grade || '',
      data.examField || '',
      data.phone || '',
      data.email || '',
      data.date || '',
      data.time || '',
      data.code || '',
      data.notes || ''
    ];
    
    sheet.appendRow(row);
    
    // Başarılı yanıt döndür (HTML redirect ile)
    return HtmlService.createHtmlOutput(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Başarılı</title>
        </head>
        <body>
          <script>
            window.top.postMessage({ success: true, message: 'Veri başarıyla kaydedildi' }, '*');
          </script>
          <p>Veri başarıyla kaydedildi!</p>
        </body>
      </html>
    `);
      
  } catch (error) {
    // Hata durumunda
    Logger.log('Hata: ' + error.toString());
    return HtmlService.createHtmlOutput(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Hata</title>
        </head>
        <body>
          <script>
            window.top.postMessage({ success: false, error: '${error.toString()}' }, '*');
          </script>
          <p>Hata: ${error.toString()}</p>
        </body>
      </html>
    `);
  }
}

// Test için doGet fonksiyonu
function doGet(e) {
  return ContentService.createTextOutput('Google Apps Script çalışıyor! Form verilerini göndermek için POST kullanın.');
}

/**
 * Test fonksiyonu (isteğe bağlı)
 */
function testDoPost() {
  const testData = {
    fullName: 'Test Kullanıcı',
    grade: '12',
    examField: 'sayisal',
    phone: '0555 123 45 67',
    email: 'test@example.com',
    date: '2024-12-01',
    time: '14:00',
    code: 'TEST123',
    notes: 'Test notu'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

