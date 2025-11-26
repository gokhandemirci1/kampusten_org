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
    const SPREADSHEET_ID = 'BURAYA_SHEET_ID_YAPISTIRIN';
    const SHEET_NAME = 'Form Verileri'; // Sayfa adı
    
    // Gelen veriyi parse et
    const data = JSON.parse(e.postData.contents);
    
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
    
    // Başarılı yanıt döndür
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Veri başarıyla kaydedildi' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Hata durumunda
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
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

