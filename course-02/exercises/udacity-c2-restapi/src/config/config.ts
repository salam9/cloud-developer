export const config = {
  "dev": {
    "username": process.env.PSTGRESS_USERNAM,
    "password": process.env.PSTGRESS_PASSWORD,
    "database": process.env.PSTGRESS_DATABASE,
    "host": process.env.PSTGRESS_HOST,
    "dialect": "postgres",
    "aws_region": process.env.PSTGRESS_REGION,
    "aws_profile": process.env.PSTGRESS_PROFILE,
    "aws_media_bucket": process.env.AWS_MEDIA_BUCKET
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret":process.env.JWT_SECRET
  }
}
