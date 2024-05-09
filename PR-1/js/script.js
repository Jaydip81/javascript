// Distance
/*-----------------------------------------------------------------*/
//meter to foot
function MeterToFoot() {
    let meter = parseInt(document.getElementById("input-meter-foot").value);
    let MeterToFoot = meter * 3.28;

    document.getElementById("op-meter-foot").innerHTML = `Foot : ${MeterToFoot}`;
}
//foot to meter
function FTtoMT() {
    let foot = parseFloat(document.getElementById("input-foot-meter").value);
    let FTtoMT = foot / 3.28;

    document.getElementById("op-foot-meter").innerHTML = `meter : ${FTtoMT}`;
}
//meter to Kilometer
function MTtoKM() {
    let meter = parseFloat(document.getElementById("input-meter-km").value);
    let MTtoKM = meter / 1000;

    document.getElementById("op-meter-km").innerHTML = `km : ${MTtoKM}`;
}
//Kilometer to Meter
function KMtoMT() {
    let km = parseFloat(document.getElementById("input-km-meter").value);
    let KMtoMT = km * 3280;
    document.getElementById("op-km-meter").innerHTML = `foot : ${KMtoMT}`;
}
//Currency
/*-----------------------------------------------------------------*/
//INR to YEN
function InrtoJap() {
    let inr = parseInt(document.getElementById("input-inr-Jap").value);
    let itoj = inr * 1.859;
    document.getElementById("op-Jap-inr").innerHTML = `Jap : ${InrtoJap}`;
}
//INR to NPR
function InrtoNpr() {
    let inr = parseFloat(document.getElementById("input-inr-npr").value);
    let InrtoNpr = inr * 1.6012;

    document.getElementById("op-Inr-npr").innerHTML = `NPR : ${InrtoNpr}`;
}
//SRL to USD
function SrltoUsd() {
    let sri = parseFloat(document.getElementById("input-srl-usd").value);
    let SrltoUsd = sri * 0.0033;

    document.getElementById("op-Srl-usd").innerHTML = `USD : ${SrltoUsd}`;
}
//AUD to CNS
function AudtoCns() {
    let aus = parseFloat(document.getElementById("input-aud-cns").value);
    let AudtoCns = aus * 4.7523;
    document.getElementById("op-Aud-cns").innerHTML = `Cns : ${AudtoCns}`;
}
//tempreture
/*-----------------------------------------------------------------*/
// Celsuis to Fahrenheit
function CeltoFeh() {
    let cel = parseInt(document.getElementById("input-celsius").value);
    let CeltoFeh = cel * 1.8 + 32;
    document.getElementById("op-fah").innerHTML = `Fahrenheit : ${CeltoFeh}`;
}
// Fehrenhite to Celsius
function FehtoCel() {
    let fal = parseInt(document.getElementById("input-fahrenheit").value);
    let FehtoCel = (fal - 32) / 1.8;
    document.getElementById("op-cal").innerHTML = `Celsius : ${FehtoCel}`;
}
//Kelvin to Fahrenhite
function KeltoFah() {
    let kel = parseFloat(document.getElementById("input-kelvin").value);
    let KeltoFah = kel * 9 / 5 - 459.67;
    document.getElementById("op-feh").innerHTML = `Fahrenheit : ${KeltoFah}`;
}
//Celsius to Kelvin
function CeltoKel() {
    let cal = parseFloat(document.getElementById("input-celsius").value);
    let CeltoKel = cal + 274.15;

    document.getElementById("op-kel").innerHTML = `kelvin : ${CeltoKel}`;
}