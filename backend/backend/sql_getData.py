# sqlからデータを取得するためのファイル

import mysql.connector

# データベースに接続
connection = mysql.connector.connect(host='localhost',
                                user='root',
                                password='Ymkn0805!',
                                database='band')


# データの取得
with connection.cursor() as cursor:
        # データ読み込み
        sql = "SELECT * FROM `band`"
        cursor.execute(sql)
        result = cursor.fetchone()
        print(result)

# 終了処理
cursor.close()