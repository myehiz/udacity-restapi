export const config = {
 "postgress": {
    "username": "udagramdatabase",
    "password": "udagramdatabase",
    "database": "udagramdatabase",
    "host": "udagramdatabase.cfoezjlvman7.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
},
"aws":{
  "aws_region": "us-east-1",
    "aws_profile": "ehiz",
    "aws_media_bucket": "udagram-ehiz-dev1"
},
"jwt": {
    "secret": "helloworld"
  }
}


// export const config = {
//  "postgress": {
//     "username": process.env.POSTGRESS_USERNAME,
//     "password": process.env.POSTGRESS_PASSWORD,
//     "database": process.env.POSTGRESS_DATABASE,
//     "host": process.env.POSTGRESS_HOST,
//     "dialect": "postgres",
// },
// "aws":{
//   "aws_region": process.env.AWS_REGION,
//     "aws_profile": process.env.AWS_PROFILE,
//     "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
// },
// "jwt": {
//     "secret": ""
//   }
// }
