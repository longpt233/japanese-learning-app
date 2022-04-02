pipeline{
    agent any
    stages{

        stage('Checkout'){
            steps{
                git 'https://github.com/longpt233/japanese-learning-app'
            }
        }

        stage 'Test'{
            // sh 'go vet'
            // sh 'go test -cover'
        }
            
            
        stage 'Build'{
            // sh 'go build .'
        }
            
        stage 'Deploy'{
            // do no thing
        }
    }
}