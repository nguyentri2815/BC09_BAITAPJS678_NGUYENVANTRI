// ================================================== BAI 1 ============================================
function printNuber() {
    for (let i = 0; i < 100; i += 10) {
        var result = '';
        var length = i + 10;
        for (let k = i + 1; k <= length; k++) {
            if (k < 10) {
                result = result + '0' + k + ' ';
            } else {
                result = result + k + ' ';
            }
        }
        document.querySelector(`.log-${i}`).innerHTML = result;
    }
}

// ================================================== BAI 2 ============================================
function printPrime() {
    var valueInput=document.querySelector('.inputArr').value;

    var arr =valueInput.split(',');
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (+arr[i] < 2) {

        } else if (+arr[i] === 2 || +arr[i] === 3) {
            newArr.push(arr[i]);
        }
        else {
            var cout = 0;
            for (var k = 2; k <= Math.sqrt(+arr[i]); k++) {
                if ((+arr[i]) % k === 0) {
                    ++cout;
                }
            }
            if (cout === 0) {
                newArr.push(arr[i]);
            } else {
                cout = 0;
            }
        }
    }
    document.querySelector('.result-bai2').innerHTML=newArr;
}

// ================================================== BAI 3 ============================================
function calcS(){
    var valueInput=+document.querySelector('.numS').value;
    var result3=0;
    if(valueInput <=1){
        result3='nhập số > = 2 đi ông -_-';
    }else{
        for (let i = 2; i <= valueInput; i++) {
            result3=result3+i;
        }
        console.log(result3);
        result3=result3+(2*valueInput);
    }
    document.querySelector('.result-bai3').innerHTML=result3;
}

// ================================================== BAI 4 ============================================
function calcU(){
    var numInput=+document.querySelector('.num4').value;
    var arrN=[];
    if(numInput<=0){
        document.querySelector('.result-bai4').innerHTML='nhập số > = 1 đi ông nội :V';
    }else{
        for (let i = 0; i <=numInput; i++) {
            if(numInput%i===0){
                arrN.push(i);
            }
            
        }
        document.querySelector('.result-bai4').innerHTML=arrN;
    }

}
// ================================================== BAI 5 ============================================
function reverce(){
    var numInput=document.querySelector('.num5').value;
    var length=numInput.length;
    var newstring=[];
    for (let i = 0; i < length; i++) {
        var temp=numInput[i];
        newstring[i]=numInput[length-(i+1)];
        newstring[length-(i+1)]=temp;
    }
    document.querySelector('.result-bai5').innerHTML=newstring.join('');

}
// ================================================== BAI 6 ============================================
function findX(){
   var result=0;
   var cout=0;
   var valueInput=+document.querySelector('.num6').value;
   if(valueInput<10){
    document.querySelector('.result-bai6').innerHTML='đừng nhập số < 10 nha';
   }else{
       for (let i=1; result <= valueInput ; i++) {
           cout=i;
           result+=i;
       }
       document.querySelector('.result-bai6').innerHTML=(cout-1);
   }
}
// ================================================== BAI 7 ============================================
function multiplication(){
   var valueInput=+document.querySelector('.num7').value;
   var result=0;
   for (let i = 0; i <=10; i++) {
        result=valueInput*i;
        document.querySelector(`.log7-${i}`).innerHTML=`${valueInput} x ${i} = ${result}`;
   }
}
// ================================================== BAI 8 ============================================
function share(){
   var players = [ [], [], [], [] ];
   var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S","AS", "7H", "9K", "10D"];
   var length=cards.length/4;
   var step=0;
    for (let i = 0; i < length ; i++) {
        players[0][i]=cards[step];
        ++step;
        players[1][i]=cards[step];
        ++step;
        players[2][i]=cards[step];
        ++step;
        players[3][i]=cards[step];
        ++step;
    }
    document.querySelector('.log8-0').innerHTML=` player1 = ${players[0]}`;
    document.querySelector('.log8-1').innerHTML=` player2 = ${players[1]}`;
    document.querySelector('.log8-2').innerHTML=` player3 = ${players[2]}`;
    document.querySelector('.log8-3').innerHTML=` player4 = ${players[3]}`;
    
}
// ================================================== BAI 9 ============================================
function NumDogChicken(){
    var dog;
    var chicken;
    var numAnimals=+document.querySelector('.num9-1').value;
    var numFeet=+document.querySelector('.num9-2').value;
    dog=((numFeet/2)-numAnimals);
    chicken=numAnimals-dog;
    document.querySelector('.numdog').innerHTML=dog;
    document.querySelector('.numchicken').innerHTML=chicken;
}
// ================================================== BAI 10 ============================================
function calcGoc(){
    // 1phut = 360 đô
    // 1h = 360 độ
    // goc phút=360/60=6 độ
    // goc giờ =360/12=30 độ
    // 1phut kim giờ quay được = 30/60=0.5 độ
    // goc = so phut *6 - 0.5(số h* 60 + só phút);
    var h=+document.querySelector('.gio').value;
    var p=+document.querySelector('.phut').value;
    var goc;
    if(h>=12){
        h=h-12;
    }
    goc=Math.abs((p*6)-(0.5*(h*60+p)));
    document.querySelector('.result-bai10').innerHTML=goc+' '+ 'độ';
}