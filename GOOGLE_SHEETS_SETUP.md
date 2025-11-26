# Google Sheets Kurulum Rehberi

## 1. Google Sheets'te Sayfa Oluşturma

Yeni bir Google Sheets dosyası oluşturun ve aşağıdaki başlıkları **A1** hücresinden başlayarak ekleyin:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| **Tarih** | **Saat** | **Ad Soyad** | **Sınıf** | **Hazırlanılan Alan** | **Telefon** | **E-posta** | **Görüşme Tarihi** | **Görüşme Saati** | **Kod** | **Özel Not** |

## 2. Hücre Başlıkları (Sütunlar)

1. **A1**: Tarih (Form gönderilme tarihi)
2. **B1**: Saat (Form gönderilme saati)
3. **C1**: Ad Soyad
4. **D1**: Sınıf
5. **E1**: Hazırlanılan Alan
6. **F1**: Telefon
7. **G1**: E-posta
8. **H1**: Görüşme Tarihi
9. **I1**: Görüşme Saati
10. **J1**: Kod
11. **K1**: Özel Not

## 3. Google Apps Script Kurulumu

1. Google Sheets'te **Extensions** > **Apps Script** menüsüne gidin
2. `google-apps-script.js` dosyasındaki kodu kopyalayıp yapıştırın
3. `SPREADSHEET_ID` değişkenine Google Sheets dosyanızın ID'sini yapıştırın
   - Sheets URL'sinden ID'yi alabilirsiniz: `https://docs.google.com/spreadsheets/d/[BURASI_ID]/edit`
4. **Deploy** > **New deployment** > **Web app** seçin
5. Ayarlar:
   - **Execute as**: Me
   - **Who has access**: Anyone
6. **Deploy** butonuna tıklayın
7. Web app URL'ini kopyalayın

## 4. Form Entegrasyonu

Form submit fonksiyonunu güncelleyin (`ConsultationForm.jsx`):

```javascript
const handleSubmit = async (e) => {
  e.preventDefault()
  if (validate()) {
    try {
      const response = await fetch('WEB_APP_URL_BURAYA', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      if (result.success) {
        onSuccess()
      } else {
        alert('Bir hata oluştu: ' + result.error)
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Form gönderilirken bir hata oluştu')
    }
  }
}
```

## 5. İzinler

İlk çalıştırmada Google Apps Script izin isteyecektir:
- **İzinleri gözden geçir** butonuna tıklayın
- Google hesabınızı seçin
- **Gelişmiş** > **Kampüsten'e git** (güvenli)
- **İzin ver** butonuna tıklayın

## Notlar

- Her form gönderiminde yeni bir satır eklenir
- Tarih ve saat otomatik olarak eklenir
- Boş alanlar boş string olarak kaydedilir
- Başlık satırı otomatik olarak formatlanır (kalın, sarı arka plan)

