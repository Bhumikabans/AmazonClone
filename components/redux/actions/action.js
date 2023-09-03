export const getProducts =()=>async(dispatch)=>{             //used redux thunk here
    try{
        const data = await fetch("http://localhost:8003/getproducts",{          //calling api here
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });

        const res = await data.json();
        console.log(res);
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})

    }catch(error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}