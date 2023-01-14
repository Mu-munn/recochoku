from flask import Flask, jsonify, request
import re
import sql_getData
import sql_insert

app = Flask(__name__)

app.config['JSON_AS_ASCII'] = False # 文字化け防止

@app.route('/group', methods=["POST"])
def createUser():
    # リクエストbodyから来たデータをpythonの変数に格納する
    bandName = request.form.get("bandName")
    bandMembers = request.form.get("bandMembers")
    musicGenreStr = request.form.get("musicGenre")
    musicGenres = musicGenreStr
    # musicGenres = re.sub('(\[|\'|\]|\s)', '', musicGenreStr).split(',')
    # instrumentsStr = request.form.get("instruments")
    # instruments = re.sub('(\[|\'|\]|\s)', '', instrumentsStr).split(',')
    skills = request.form.get("skills")
    residence = request.form.get("residence")
    sql_insert.insert(bandName, bandMembers, musicGenres, skills, residence)
    jsonData = {
        "bandName": bandName,
        "bandMembers": bandMembers,
        "musicGenres": musicGenres,
        # "instruments": instruments,
        "skills": skills,
        "residence": residence
    }
    return jsonify(jsonData)

@app.route('/mock/group', methods=["GET"])
def updateClientGroup():
    result = sql_getData.getData()
    jsonData = {
        "bandName": "バンド名",
        "bandMembers": "23",
        "musicGenres": [21, 23, 22, 34],
        "instruments": [21, 22, 23, 21],
        "skills": 21,
        "residence": 78
    }
    groups = [jsonData, jsonData, jsonData]
    # return groups

    return jsonify(result)

@app.route('/good')
def good():
    name = "Good"
    return name

## おまじない
if __name__ == "__main__":
    app.run(debug=False, host='0.0.0.0', port=80)