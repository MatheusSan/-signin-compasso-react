import {render, screen} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthUser';
import '@testing-library/jest-dom';

import Logged from './Logged';


describe( 'Buscar componentes na tela Home', () => {
    it ('Mostrar Porto Alegre-RS', () =>{
        render(
            <AuthProvider>
            <BrowserRouter>
               <Logged/> 
            </BrowserRouter> 
            </AuthProvider>     
        );

        expect(screen.getAllByText("Porto Alegre - RS")[0]).toBeInTheDocument();
    })

    it ('Mostrar Botão Logout', () => {
        render(
            <AuthProvider>
            <BrowserRouter>
               <Logged/> 
            </BrowserRouter> 
            </AuthProvider> 
        );
        expect (screen.getByText("Logout")).toBeInTheDocument();
    })

    it ('Mostrar seconds', () =>{
        render(
                <AuthProvider>
                <BrowserRouter>
                   <Logged/> 
                </BrowserRouter> 
                </AuthProvider> 
        );
       expect (screen.getByText("seconds")).toBeInTheDocument();     
    })
    
    it ('Frases de missão e visão', () =>{
        render(
            <AuthProvider>
            <BrowserRouter>
               <Logged/> 
            </BrowserRouter> 
            </AuthProvider>    
        );
       expect (screen.getByText("Our mission is")).toBeInTheDocument(); 
       expect (screen.getByText("nossa missão é")).toBeInTheDocument(); 
       expect (screen.getByText("transform the world")).toBeInTheDocument(); 
       expect (screen.getByText("transformar o mundo")).toBeInTheDocument();
       expect (screen.getByText("building digital experiences")).toBeInTheDocument();
       expect (screen.getByText("construindo experiências digitais")).toBeInTheDocument();
       expect (screen.getByText("that enable our client's growth")).toBeInTheDocument();
       expect (screen.getByText("que permitam o crescimento dos nossos clientes")).toBeInTheDocument();
    })

    it ('Buscar data e hora atual no sistema', ()=>{
        render (
            <AuthProvider>
            <BrowserRouter>
               <Logged/> 
            </BrowserRouter> 
            </AuthProvider>   
        );
        async function exp(){
            expect (await screen.findByText(new Date().getHours() + ':' + new Date().getMinutes())).toBeInTheDocument(); 
            expect (await screen.findByText("de " + new Date().getFullYear())).toBeInTheDocument(); 
            expect (await screen.findByText(new Date().getDate() + " de")).toBeInTheDocument();
        };
        exp();
         
    })  
})

