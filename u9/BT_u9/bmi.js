function kiem_tra() {
    let c_n = document.getElementById("c_n").value;
    let c_c = document.getElementById("c_c").value;
    let bmi = c_n / ( c_c ^ 2 );
    let result = "";

    if (bmi < 16)
       result = "Gầy độ 3. Ăn thật nhiều vào nhé" + "<img srs = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia3.giphy.com%2Fmedia%2Fe00e3L5DIC3v2%2F200w.gif%3Fcid%3D82a1493bljvupror97cwmi0cag239vzcnnp1d1j6y8w274uy%26rid%3D200w.gif%26ct%3Dg&imgrefurl=https%3A%2F%2Fgiphy.com%2Fexplore%2Fground-beef&tbnid=HMlIEb4zbniFkM&vet=12ahUKEwjBnbCM7dn6AhXMfHAKHTwPBaEQMygJegUIARCDAg..i&docid=2exbAnokjP91NM&w=200&h=227&q=beff%20gif&ved=2ahUKEwjBnbCM7dn6AhXMfHAKHTwPBaEQMygJegUIARCDAg' width='100' height= '100'>";
        else if (bmi < 17)
        result = "Gầy độ 2"
    else if (bmi < 18.5)
        result = "Gầy độ 1"
    else if (bmi < 25)
        result = "Bình thường"
    else if (bmi < 30)
        result = "Thừa cân"
    else if (bmi < 35)
        result = "Béo phì độ 1"
    else if (bmi < 40)
        result = "Béo phì độ 2"
    else
        result = "Béo phì độ 3" + "<img src = 'https://media.giphy.com/media/pZ2U9WUs4AZa/giphy.gif' width='100' height= '100'>"

    document.getElementById("result").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result + "</b>";

}