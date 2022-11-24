# sqlからデータを取得するためのファイル

import mysql.connector

def getData():
        # データベースに接続
        connection = mysql.connector.connect(host='localhost',
                                                user='root',
                                                password='password',
                                                database='band')


        # データの取得
        with connection.cursor(buffered=True) as cursor:
                # データ読み込み
                sql = "SELECT * FROM `band`"
                cursor.execute(sql)
                result = cursor.fetchall()
                print(result)

        # 終了処理
        cursor.close()
        return result