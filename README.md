# Genel Bilgi
Bu projede, api ve ui test otomasyonları gerçekleştirilmektedir. 

## Gereksinimler

- Node.js - https://nodejs.org/en/download
- Visual Code ve Eklentileri
    https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
    https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next
    https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright
- Diğer gereksinimler için bkz. : package.json

## Proje Yapısı

    TEST_PROJECT/
    ├── node_modules/
    │── tests/
    │   │   │   └── add_book.spec/
    │   │   │   └── login_logout.spec/
    │   │   │   └── search_book.spec/
    │── utils/
    |   │   │   └── api/
    |   │   │   └── login_logout/
    ├── .gitignore
    ├── playwright-report
    ├── package-lock.json
    ├── package.json
    ├── playwright.config.ts
    ├── README.md

- `tests`                : Bu klasör, api ve ui sınıflarının methodlarını kullanarak case lerin yazıldığı sınıfları içerir.
- `.gitignore`           : Git tarafından repoya aktarılmaması gereken dosya ve klasörlerin listesini içeren dosya.
- `package-lock.json`    : Proje bağımlılıklarının kesin sürüm bilgilerini içeren dosya.
- `package.json`         : Proje bağımlılıklarının ve komutların tanımlandığı JSON dosyası.
- `playwright.config.ts` : Playwright test otomasyonunun yapılandırma dosyası.

## Test Hazırlama

1. Gereksinimler indirilir.
2. Repository klonlanır.
3. Terminale 'npm install' komutu girilerek package.json içindeki kütüphaneler yüklenir.
4. Çalışılan proje için bir sınıf oluşturulur. 


## Example Run Command

- npx playwright test
- npx playwright test 

## Test Sonuçlarının Görüntülenmesi

- npx playwright show-report 



## Test Caseler

#Senario: has title
Given: Kullanıcı 'https://demoqa.com' linkine sahiptir.
When: Kullanıcı https://demoqa.com adresine tıklar.
Then: Kullanıcı title da 'DEMOQA' textini görür

#Senario: login success
Given: Kullanıcı 'https://demoqa.com' adresindedir.
And: kullanıcı daha önce register olmuştur.
When: Kullanıcı doğru username ini girer.
And: kullanıcı doğru password girer.
And: Kullanıcı 'Login' butonuna tıklar.
Then: kullanıcı başarı ile login olur.

#Senario: login fail with incorrect email
Given: Kullanıcı 'https://demoqa.com' adresindedir.
And: kullanıcı daha önce register olmuştur.
When: Kullanıcı doğru username ini girer.
And: kullanıcı yanlış password girer.
And: Kullanıcı 'Login' butonuna tıklar.
Then: Kullanıcı login olamaz, error message görür.

#Senario: login fail with incorrect password
Given: Kullanıcı 'https://demoqa.com' adresindedir.
And: kullanıcı daha önce register olmuştur.
When: Kullanıcı yanlış username ini girer.
And: kullanıcı doğru password girer.
And: Kullanıcı 'Login' butonuna tıklar.
Then: Kullanıcı login olamaz, error message görür.

#Senario: login fail with empty username
Given: Kullanıcı 'https://demoqa.com' adresindedir.
And: kullanıcı daha önce register olmuştur.
When: Kullanıcı username alnını boş bırakır.
And: kullanıcı doğru password girer.
And: Kullanıcı 'Login' butonuna tıklar.
Then: Kullanıcı login olamaz, error message görür.

#Senario: login fail with empty password
Given: Kullanıcı 'https://demoqa.com' adresindedir.
And: kullanıcı daha önce register olmuştur.
When: Kullanıcı password alnını boş bırakır.
And: kullanıcı doğru username girer.
And: Kullanıcı 'Login' butonuna tıklar.
Then: Kullanıcı login olamaz, error message görür.

#Senario: login fail with empty password and username
Given: Kullanıcı 'https://demoqa.com' adresindedir.
And: kullanıcı daha önce register olmuştur.
When: Kullanıcı password alnını boş bırakır.
And: Kullanıcı username alnını boş bırakır.
And: Kullanıcı 'Login' butonuna tıklar.
Then: Kullanıcı login olamaz, error message görür.

#Senario: logout success
Given: Kullanıcı 'https://demoqa.com' adresindedir.
And: kullanıcı daha önce login olmuştur.
When: Kullanıcı logout butona tıklar.
Then: Kullanıcı başarıyla logout olur.
(password: Test123*
username: kubra.atıcı)


#Senario: success search book
Given: Kullanıcı 'https://demoqa.com/books' adresindedir.
When: Kullanıcı search input alana 'java' textini girer.
Then: Sistem içerisinde java olan tüm kitapları başarıyla getirir.



