
const degreeInput=document.getElementById('degree')
const convert=document.getElementById('convert')
const selectType=document.getElementById('type')

const toFahrenheit=(deginput)=>{
    const ans= (deginput*(9/5))+32
    showResult(ans,'ºF')
}
const toKelvin=(deginput)=>{
    const ans= deginput+273.15
    showResult(ans,'K')
}
const toRankine=(deginput)=>{
    const ans= (deginput*(9/5))+491.67 
    showResult(ans,'ºR')
}
const toRéaumur=(deginput)=>{
    const ans= deginput*0.8
    showResult(ans,'ºRe')
}

convert.onclick=()=>{
    const deginput=Number(degreeInput.value)
    if(selectType.selectedIndex ==0){
        toFahrenheit(deginput)
    }
    else if(selectType.selectedIndex ==1){
        toKelvin(deginput)
    }
    else if(selectType.selectedIndex ==2){
        toRankine(deginput)
    }
    else{
        toRéaumur(deginput)
    }
}

const resultDiv=document.getElementById('result')
const showResult=(result,unit)=>{
        resultDiv.innerText = `${result} ${unit}`
}