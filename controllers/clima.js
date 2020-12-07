const { response } = require( 'express' )
const request = require('request')

const API_KEY = process.env.API_KEY

const ubicacionActual = (req, res = response ) => {
    try {   
        const urlIP = 'http://ip-api.com/json/'
    
        request(urlIP, ( error, respon, body ) => {
            const { city } = JSON.parse( body )
        
            let sinNada = (function(){
                let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
                     a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
                    re = new RegExp('['+de+']' , 'ug');
            
                return texto =>
                    texto.replace(
                        re, 
                        match => a.charAt(de.indexOf(match))
                    );
            })();
            const cityBien = sinNada( city )
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityBien }&appid=${ API_KEY }&units=metric&lang=sp`
            
            request( url, (error, respon, body) => {
                datosAPI = JSON.parse( body ) 
                res.json({
                    ok: true,
                    msg: 'Ubicacion actual',
                    datosAPI
                })
            })
        })
    } catch (error) {
        console.log(error)
    }
}
const cliUbActual = (req, res = response ) => {
    try {   
        const urlIP = 'http://ip-api.com/json/'
    
        request(urlIP, ( error, respon, body ) => {
            const { city } = JSON.parse( body )
        
            let sinNada = (function(){
                let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
                     a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
                    re = new RegExp('['+de+']' , 'ug');
            
                return texto =>
                    texto.replace(
                        re, 
                        match => a.charAt(de.indexOf(match))
                    );
            })();
            
            const cityBien = req.params.city || sinNada( city )
            
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${ cityBien }&appid=${ API_KEY }&units=metric&lang=sp`
            
            request( url, (error, respon, body) => {
                datosAPI = JSON.parse( body ) 
                res.json({
                    ok: true,
                    msg: 'Clima actual',
                    datosAPI
                })
            })
        })
    } catch ( error ) {
        console.log( error )
    }
}


const forecast = ( req, res = response ) => {
    try {
        const urlIP = 'http://ip-api.com/json/'
    
        request(urlIP, ( error, respon, body ) => {
            const { city } = JSON.parse( body )
        
            let sinNada = (function(){
                let de = 'ÁÃÀÄÂÉËÈÊÍÏÌÎÓÖÒÔÚÜÙÛÑÇáãàäâéëèêíïìîóöòôúüùûñç',
                     a = 'AAAAAEEEEIIIIOOOOUUUUNCaaaaaeeeeiiiioooouuuunc',
                    re = new RegExp('['+de+']' , 'ug');
            
                return texto =>
                    texto.replace(
                        re, 
                        match => a.charAt(de.indexOf(match))
                    );
            })();
            
            const cityBien = req.params.city || sinNada( city )
            
            
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${ cityBien }&appid=${ API_KEY }&units=metric&lang=sp`
        
            request( url, (error, respon, body) => {
                datosAPI = JSON.parse( body ) 
                res.json({
                    ok: true,
                    msg: 'Clima semamal',
                    datosAPI
                })
            })
        })
    } catch ( error ) {
        console.log( error )
    }

}



module.exports = {
    ubicacionActual,
    cliUbActual,
    forecast
}