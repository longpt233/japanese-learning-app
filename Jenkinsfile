pipeline{
    agent any
    stages{

        stage('Checkout'){
            steps{
                git branch: 'main', url: 'https://github.com/longpt233/japanese-learning-app'
            }
        }

        stage('Test'){
            steps{
                echo 'test'
            }
        }
            
        stage('Build'){
            steps{
                withDockerRegistry(credentialsId: 'docker-hub', url: 'https://index.docker.io/v1/') {
                    echo 'start build ...'
                    sh 'docker build -t longpt233/app-image .'
                    sh 'docker push longpt233/app-image'
                }
            }
        }
            
        stage('Deploy'){
            steps{
                echo 'start deploy ...'
                sshagent(['ssh-remote']) {
                    sh 'ssh -o StrictHostKeyChecking=no -l root 13.70.60.235 docker run longpt233/app-image -p 8091:8091'
                }
            }
        }
    }
}