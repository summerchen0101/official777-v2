
COMMIT_ID=$(git log -1 --pretty=format:"%h")
TIMESTAMP=$(date +"%s")
IMAGE_NAME="gcr.io/megarich/official-website"
IMAGE_TAG=$TIMESTAMP-$COMMIT_ID

echo $IMAGE_NAME
echo $IMAGE_TAG
echo $IMAGE_NAME:$IMAGE_TAG

echo $IMAGE_NAME:$IMAGE_TAG > .latest-docker
docker build -f ./Dockerfile -t $IMAGE_NAME:$IMAGE_TAG .
docker push $IMAGE_NAME:$IMAGE_TAG
