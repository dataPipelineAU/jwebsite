./build.sh
aws s3 cp _site s3://www.datapipeline.com.au/ --recursive --region "ap-southeast-2"
aws s3 cp _site s3://datapipeline.com.au/ --recursive --region "ap-southeast-2"
