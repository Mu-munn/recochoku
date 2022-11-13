# sqlにインサートするファイル
import mysql.connector

# データベースに接続
connection = mysql.connector.connect(host='localhost',
                                    user='root',
                                    password='Ymkn0805!',
                                    database='band')

with connection:
    with connection.cursor() as cursor:
        # レコードを挿入
        sql = "INSERT INTO band VALUES(1,'Okamotos', 1, 1, 1, 1)"
        cursor.execute(sql)

    # コミットしてトランザクション実行
    connection.commit()

# 終了処理
cursor.close()