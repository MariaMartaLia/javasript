let amigo={
    nome:'José',
    sexo: 'M',
    peso:84,
    engordar(p=0){
    console.log(`engordou`)
    this.peso += p
    }}
amigo.engordar(3)
 console.log(`${amigo.nome} engordou  ${amigo.peso} kg`)