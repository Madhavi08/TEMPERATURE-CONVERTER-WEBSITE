
const degreeInput=document.getElementById('degree')
const convert=document.getElementById('convert')
const selectType=document.getElementById('type')

const toFahrenheit=(deginput)=>{
    const ans= (deginput*(9/5))+32
    showResult(ans,'ºF')
}
const toCelcius=(deginput)=>{
    const ans= (deginput-32)*(5/9)
    showResult(ans,'ºC')
}


convert.onclick=()=>{
    const deginput=Number(degreeInput.value)
    if(selectType.selectedIndex ==0){
        toCelcius(deginput)
    }
    else if(selectType.selectedIndex ==1){
        toFahrenheit(deginput)
    }
   
}

const resultDiv=document.getElementById('result')
const showResult=(result,unit)=>{
        resultDiv.innerText = `${result.toFixed(2)} ${unit}`
}