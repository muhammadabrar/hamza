import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
export default async function handle(req, res) {
  var today = new Date()

  var fulldate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  var date = today.getDate();
  var month = today.getMonth()
  var year = today.getFullYear()
  var hours = today.getHours();
    var AmOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;
    var min = today.getMinutes();
    min = min<=9 ? '0'+min: min
    var time = hours+' : '+min+ " " + AmOrPm; 
    switch (req.method) {
      case 'GET':
       
          
          
          
        res.json("get")
        break
      case 'POST':
        const data = JSON.parse(req.body)
        
      
        const save = await prisma.post.create({
          data: {
            date   : fulldate + time,
            name   : data.name,
            email  : data.email,
            phone  : data.phone,
            subject: data.subject,
            msg    : data.msg
          },
         },);
         if(save){
             
            res.json(err=false)

         }else{
        res.json(err=true)

         }
       
     
        break
   
  
      default:
        res.status(405).end() //Method Not Allowed
        break
    }
  }

