type Method = "GET"|"POST"|"DELETE|UPDATE";

export interface Result{
    data:any;
}

export async function Request(path:string,method:Method,body?:any):Promise<Result>{
    let data:Result = {data:"None"};
    if(path.trim().length <= 0){
        data = {data:"Le chemin n'est pas valide!"}
    }
    else{
        try{
            let header = new Headers();
            header.append("Content-Type","application/json");
            let init : any = {method:method}
            init.headers = header;
            init.body = JSON.stringify(body);
            await fetch(path,init).then(res => {
                return res.text();
            }).then(text => {
                data.data = JSON.parse(text);
                console.log(data);
            });
        }
        catch(e){
            console.error(e);
        }
    }
    
    return data;
}

export async function CustomRequest(path:string,method:Method,header:Headers,body?:any):Promise<Result>{
    let data:Result = {data:"None"};
    if(path.trim().length <= 0){
        data = {data:"Le chemin n'est pas valide!"}
    }
    else{
        try{
            let req : any = {method:method}
            req.headers = header;
            req.body = JSON.stringify(body);
            await fetch(path,req).then(res => {
                return res.text();
            }).then(text => {
                data.data = JSON.parse(text);
                console.log(data);
            });
        }
        catch(e){
            console.error(e);
        }
    }
    
    return data;
}