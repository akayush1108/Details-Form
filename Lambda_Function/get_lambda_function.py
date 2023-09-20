import json
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Details-Form') 
def lambda_handler(event, context):
    m1=table.scan()
#any message you want to print in the console to know whether request is forwarded or not
    #message = 'Hello {}, Your details has been saved successfully!'.format(event['name'])
    return m1