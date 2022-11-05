


export const createAccount = async (user) => {
  console.log(user)
  const options = {
    method: "POST",
    headers: {      
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user),
  } 
  try {
    const res = await fetch('http://localhost:4000/signup', options)
    console.log(res)
    const data = res.json();
    console.log(data);
  } catch( error) {
    console.log(error)
  }
}


export const login = async (user) => {
  const options = {
    method: "POST",
    headers: {      
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  } 
  try {
    const res = await fetch('http://localhost:4000/login', options)
    console.log(res)
    const data = await res.json();
    console.log(data)
    return data;
  } catch( error) {
    console.log(error)
  }
}


