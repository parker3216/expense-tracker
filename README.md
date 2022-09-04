# Expense Tracker
透過Node.js和Express所建立的記帳網站

## 專案功能
- 使用者可以直接註冊帳號或使用Facebook帳號登入
- 使用者登入後可以新增、修改、刪除自己的支出明細
- 使用者可以查看自己的所有支出項目
- 使用者可以篩選支出類別並取得該類別的支出項目及合計金額
- 使用者可以在首頁顯示自己的總消費金額

## 環境建置要求
- MongoDB
- Node.js
- 圖形化介面Robo3T

## 安裝及執行程序
1.打開終端機並將專案clone到本機
   ```bash
$ git clone https://github.com/parker3216/expense-tracker.git
   ```
2.進入專案資料夾
   ```
$ cd expense-tracker
   ```
3.確認已安裝node.js,npm套件,MongoDb雲端版,圖形化介面Robo3T

4.依據.env.example建立環境變數及建立.env檔

5.建立種子資料到資料庫內
  ```bash
   npm run seed
   ```
6.啟用伺服器執行app.js檔案
   ```bash
   npm run dev
   ```
7.當終端機出現下列字樣代表伺服器啟動成功
```bash
App is running on http://localhost:3000
mongodb connected
 ```
8.開啟瀏覽器網址列輸入 http://localhost:3000/ 即可看到本專案的網頁呈現
![image](https://user-images.githubusercontent.com/65106895/188298345-f6e4e22c-7227-41a7-a80a-5fe47c1510e4.png)
