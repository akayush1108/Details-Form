import json
import boto3
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Details-Form') 
def lambda_handler(event, context):
    table.put_item(Item=event)
#any message you want to print in the console to know whether request is forwarded or not
    message = 'Hello {}, Your details has been saved successfully!'.format(event['name'])
    return { 
        'message' : message
    }