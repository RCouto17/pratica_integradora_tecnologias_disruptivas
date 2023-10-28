import React, {useState, useEffect} from 'react';
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';
import Grid from '@mui/material/Grid';


const Usuario = () => {
    const [usuario, setUsuario] = useState('');
    return(
        <Grid item xs={12}>
            <FormControl fullWidth>
              <Input id="usuario_nome" aria-describedby="usuario_nome_helper_text" value={Usuario} 
              onChange={e => { setUsuario(e.target.value) }} />
              <FormHelperText id="usuario_nome_helper_text">Usuario</FormHelperText>
            </FormControl>
        </Grid>
        
    );
}

export default Usuario;