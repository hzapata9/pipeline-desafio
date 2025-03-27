pipeline { 
    agent any 
    environment { 
        NODE_VERSION = '23' // Cambia si usas otra versión de Node.js 
        PATH = "/usr/local/bin:/usr/local/Cellar/node/23.10.0_1/bin:$PATH"
    
    } 
 
    stages { 
        stage('Checkout') { 
            steps { 
                echo "📥 Clonando el repositorio..." 
                checkout scm 
            } 
        }
        stage('Install') { 
            steps { 
                script { 
                    try { 
                        echo "⚙️ Instalando dependencias..." 
                        
                        sh 'whoami'
                        sh 'which npm'
                        sh 'npm install'
                        sh 'npm run build' 
                    } catch (Exception e) { 
                        error("❌ Error en la etapa de Install/Build") 
                    } 
                } 
            } 
        } 

        stage('Test') { 
            steps { 
                script { 
                    try { 
                        echo "🧪 Ejecutando pruebas..." 
                        sh 'npm run test' 
                    } catch (Exception e) { 
                        error("❌ Error en la etapa de Test") 
                    } 
                } 
            } 
        } 
 
        stage('Deploy') { 
            steps { 
                script { 
                    try { 
                        echo "🚀 Desplegando aplicación..." 
                        sh 'npm start &' 
                    } catch (Exception e) { 
                        error("❌ Error en la etapa de Deploy") 
                    } 
                } 
            } 
        } 
    } 
 
    post { 
        success { 
            echo "✅ Pipeline completado con éxito" 
        } 
        failure { 
            echo "❌ El pipeline ha fallado" 
        } 
    } 
}