pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build -t santhoshvemaplii/microshop-orders -f docker/micro-shop-orders.Dockerfile .'
        echo "docker image build successfull"
      }
    }
    stage('Login') {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
	    echo "dokcer login successfull"
      }
    }
    stage('Push') {
      steps {
        sh   'docker push santhoshvemaplii/microshop-orders'
        echo "pushed image"
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}