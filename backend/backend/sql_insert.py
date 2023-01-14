# sqlにインサートするファイル
import mysql.connector

def insert(bandName, bandMemberNum, musicGenru, skills, residence):
    # データベースに接続
    connection = mysql.connector.connect(host='localhost',
                                        user='root',
                                        password='password',
                                        database='band')

    with connection:
        with connection.cursor() as cursor:
            # レコードを挿入
            sql = "INSERT INTO band(bandName, bandMemberNum, musicGenre, skills, residence) VALUES('{}', {}, {}, {}, {});".format(str(bandName), bandMemberNum, musicGenru, skills, residence)
            # print(sql)
            cursor.execute(sql)

        # コミットしてトランザクション実行
        connection.commit()

    # 終了処理
    cursor.close()

# insert('aaa', 0, 0, 0, 0)