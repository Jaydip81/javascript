function BMI()
{
    let Height_in = document.getElementById('height').value;
    let Weight_in = document.getElementById("weight").value;
    BMI_Cal(Height_in,Weight_in,age);
}
function BMI_Cal(Height_in,Weight_in){
    
    let BMI, height, weight,msg;

    height = Height_in;
    weight = Weight_in;
    BMI = weight / (height * height);

    
    if (BMI < 18.5) 
    {
        msg = "you are too Underweight";
    }
     else if (BMI > 18.5 && BMI < 24.9) 
    {
        msg = "your is weight Normal";a
    } 
    else if (BMI > 25 && BMI < 29.9) 
    {
        msg = "you are too overweight";
    } 
    else if(BMI > 30)
    {
        msg = "you are Obesity";
    }
    else 
    {
        msg = "ERROR ! try agian my friend";
    }

    document.getElementById('display').innerHTML = msg;

}
