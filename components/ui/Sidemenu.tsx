import { Box, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@mui/material"
import { AccountCircleOutlined, AdminPanelSettings, CategoryOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, LoginOutlined, MaleOutlined, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { useContext, useState } from 'react';
import { UiContext } from '../../context';
import { useRouter } from 'next/router';



export const SideMenu = () => {

    const router = useRouter()
    const {sidemenuOpen,toggleSideMenu} = useContext(UiContext)
    const [searchTerm, setSearchTerm] = useState('')

    const onSearchTerm = () => {
        if(searchTerm.trim().length ===0) return
        navegateTo(`/search/${searchTerm}`)

    }

    const navegateTo = (url:string) =>{
        toggleSideMenu()
        router.push(url)

    }
    

  return (
    <Drawer
        open={ sidemenuOpen }
        onClose={toggleSideMenu}
        anchor='right'
        sx={{ backdropFilter: 'blur(4px)', transition: 'all 0.5s ease-out' }}
    >
        <Box sx={{ width: 250, paddingTop: 5 }}>
            
            <List>

                <ListItem>
                    <Input
                   autoFocus={true}
                    value = {searchTerm}
                    sx={{display:{xs:'flex',sm:'none'}}}
                    onChange={(e)=>setSearchTerm(e.target.value)}
                    onKeyPress={(e)=> e.key==='Enter' ? onSearchTerm(): null}
                        type='text'
                        placeholder="Buscar..."
                        endAdornment={
                                    <InputAdornment position="start">
                                        <IconButton
                                        onClick={onSearchTerm}
                                        >
                                        <SearchOutlined />
                                        </IconButton>
                                    </InputAdornment>
                        }/>
                </ListItem>

                <ListItem button sx={{mt:{sm:-3}}}>
                    <ListItemIcon>
                        <AccountCircleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Perfil'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ConfirmationNumberOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mis Ordenes'} />
                </ListItem>


                <ListItem button sx={{ display: { xs: '', sm: 'none' } }}
                onClick={()=>navegateTo('/category/men')!}
                >
                    <ListItemIcon>
                        <MaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Hombres'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: '', sm: 'none' } }}
                 onClick={()=>navegateTo('/category/women')!}
                >
                    <ListItemIcon>
                        <FemaleOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Mujeres'} />
                </ListItem>

                <ListItem button sx={{ display: { xs: '', sm: 'none' } }}
                 onClick={()=>navegateTo('/category/kid')!}
                >
                    <ListItemIcon>
                        <EscalatorWarningOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Niños'} />
                </ListItem>


                <ListItem button>
                    <ListItemIcon>
                        <VpnKeyOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Ingresar'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <LoginOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Salir'} />
                </ListItem>


                {/* Admin */}
                <Divider />
                <ListSubheader>Admin Panel</ListSubheader>

                <ListItem button>
                    <ListItemIcon>
                        <CategoryOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Productos'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ConfirmationNumberOutlined/>
                    </ListItemIcon>
                    <ListItemText primary={'Ordenes'} />
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AdminPanelSettings/>
                    </ListItemIcon>
                    <ListItemText primary={'Usuarios'} />
                </ListItem>
            </List>
        </Box>
    </Drawer>
  )
}
