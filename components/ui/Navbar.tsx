import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"
import { AppBar, Link, Toolbar, Typography,Box, Button, IconButton, Badge, Input, InputAdornment } from "@mui/material"

import NextLink from 'next/link'// genera el prefech de la pagina 
import { useRouter } from "next/router"
import { useContext, useState } from 'react';
import { UiContext } from '../../context';



export const Navbar = () => {

    const {asPath,push} = useRouter()
    const path = asPath.split('/')[2]
    const {toggleSideMenu} = useContext(UiContext)
    const [searchTerm, setSearchTerm] = useState('')
    const [isSearchVisible, setIsSearchVisible] = useState(false)

    const onSearchTerm = () => {
        if(searchTerm.trim().length ===0) return
        push(`/search/${searchTerm}`)

    }

    

    
  return (
    <AppBar>
            <Toolbar>
                <NextLink href="/" passHref>
                    <Link display='flex' alignItems='center' >
                        <Typography variant="h6">Teslo |</Typography>
                        <Typography sx={{ml:0.5}}>Shop</Typography>
                    </Link>
                </NextLink>


            <Box flex={1}/>

              <Box 
              className='fadeIn'
              sx={{display:{xs:'none',sm:`${isSearchVisible?'none':'flex'}`},gap:2}} flexDirection='row' >{/*  mobile first */}
                <NextLink href="/category/men" passHref>
                <Link  >
                    <Button
                    color = {(path==='men')?'secondary':'primary'}
                    >Hombres</Button>
                </Link>
                </NextLink>
                <NextLink href="/category/women" passHref>
                <Link  >
                    <Button
                    color = {(path==='women')?'secondary':'primary'}
                    >Mujer</Button>
                </Link>
                </NextLink>
                <NextLink href="/category/kid" passHref>
                <Link  >
                    <Button
                    color = {(path==='kid')?'secondary':'primary'}
                    >Niño</Button>
                </Link>
                </NextLink>
                </Box>
            

                <Box flex={1}/>

                <IconButton
                     sx={{display:{xs:'flex',sm:'none'}}}
                     onClick={toggleSideMenu}
                >
                    <SearchOutlined/>
                </IconButton>
                {/* <IconButton>
                    <SearchOutlined/>
                </IconButton> */}
            { 
            isSearchVisible?
            (<Input
                className='fadeIn'
                sx={{display:{xs:'none',sm:'flex'}}}
                 autoFocus={true}
                    value = {searchTerm}
                  
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    onKeyPress={(e)=> e.key==='Enter' ? onSearchTerm(): null}
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                                    <InputAdornment position="start">
                                        <IconButton
                                        onClick={()=>setIsSearchVisible(false)}
                                        >
                                        <ClearOutlined />
                                        </IconButton>
                                    </InputAdornment>
                        }/>
            )  :  (
                        <IconButton 
                        sx={{display:{xs:'none',sm:'flex'}}}
                        onClick={()=>setIsSearchVisible(true)}>
                                 <SearchOutlined/>
                        </IconButton>
            )
            }
            


                <NextLink href='/cart' passHref>
                        <Link>
                                <IconButton>
                                    <Badge badgeContent={2} color ='secondary'>
                                    <ShoppingCartOutlined/>
                                    </Badge>
                                </IconButton>
                        </Link>
                </NextLink>
                <Button onClick={toggleSideMenu}>
                    Menu
                </Button>
            </Toolbar>
    </AppBar>
  )
}
