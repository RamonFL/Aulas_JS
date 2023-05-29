
const form = document.getElementById('orderForm')

form.addEventListener("submit", function(ev){
    
    ev.preventDefault() // impede que a pag atualize e nao envie os dados necessarios

    const name = document.querySelector("input[name = 'name']").value
    const address = document.querySelector("input[name = 'address']").value
    const breadtype = document.querySelector("select[name='breadType']").value
    const main = document.querySelector("input[name ='main']").value
    const observations  = document.querySelector("textarea[name = 'observations']").value

    let salad = ""
      document.querySelectorAll("input[name='salad']:checked").value
    

    console.log({
        name,
        address,
        breadtype,
        main,
        salad,
        observations
      })

    alert(
        "Nome: " + name + "\n" +
        "Endereço: " + address + "\n" +
        "Tipo De Pão: "+ breadtype + "\n" + 
        "Principal: "+ main + "\n" + 
        "Salada: " + salad + "\n"
        
    )
})



/*const form = document.getElementById("orderForm")

form.addEventListener("submit", function (ev) {
  ev.preventDefault()

  const name = document.querySelector("input[name='name']").value
  const address = document.querySelector("input[name='address']").value
  const breadType = document.querySelector("select[name='breadType']").value
  const main = document.querySelector("input[name='main']").value
  const observations = document.querySelector("textarea[name='observations']").value

  let salad = ""
  document.querySelectorAll("input[name='salad']:checked").forEach(function (item) {
    salad += " - " + item.value + "\n"
  })

  console.log({
    name,
    address,
    breadType,
    main,
    salad,
    observations
  })

  alert(
    "Pedido Realizado!" +
    "\nNome do cliente: " + name +
    "\nEndereço de entrega: " + address +
    "\nTipo de pão: " + breadType +
    "\nRecheio: \n - " + main + "\n" + salad +
    "Observações: " + observations
  )
})
*/