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
                echo 'build'
            }
        }
            
        stage('Deploy'){
            steps{
                echo 'deploy'
            }
        }
    }
}