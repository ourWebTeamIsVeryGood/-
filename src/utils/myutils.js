export function getMonth(){
    let year= new Date().getFullYear();
    let month = new Date().getMonth();
    if(month==0){
        year--;
        month=12;
    }
    return{
        year,
        month
    }
}

export function getYear(){
    let year = new Date().getFullYear();
    return {
        year
    };
}

export function getQuarter(){
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    let quarter;
    let arr=[[0,1,2],[3,4,5],[6,7,8],[9,10,11]];
    for(let item in arr){
        if(arr[item].indexOf(month)!=-1){
            quarter=item;
        }
    }
    if(quarter==0){
        year--;
        quarter=3;
    }
    return {
        year,
        quarter
    }
}