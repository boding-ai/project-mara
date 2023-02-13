import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Modal, Fade, Box } from '@mui/material'
import {  Loader } from 'semantic-ui-react'

import PaneClientMain from './pane/PaneClientMain'
import ClientList from './list_cards/ClientList'
import PetListCard from './list_cards/pet/PetListCard'
import OwnerListCard from './list_cards/owner/OwnerListCard'
import NothingToShow from '../dashboard/stats/NothingToShow'
import Rightbar from '../../tools/bars/rightbar/Rightbar'


import Navbar from '../../tools/bars/navbar/Navbar'
import Alerts from '../../../common/alerts/Alerts'
import Sidebar from '../../tools/bars/sidebar/Sidebar'
import EditOwner from '../../tools/add/profiles/owner/edit/EditOwner'
import EditPet from '../../tools/add/profiles/pet/edit/EditPet'

import {
    getOwnersOnlyFromClientsList,
    getPetsOnlyFromClientsList,
    getClientsListAll,
    deleteClientOwnerProfile,
} from '../../../../redux/actions/clients/clients'
import LoadingListCard from './list_cards/loading/LoadingListCard'

import ArrayMin from '../../tools/add-array/ArrayMin'
import MetaTags from '../../../common/helmet/MetaTags'

const style = {
    position: 'fixed',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    p: 4,
}

const Clients = ({
    // Redux Actions
    getOwnersOnlyFromClientsList,
    getPetsOnlyFromClientsList,
    getClientsListAll,
    deleteClientOwnerProfile,
    // Redux States
    clients: {
        clientsMinimizeTabs,
        clientsListAllGetLoading,
        clientsList,
        editProfilesClientsLoading,
        clientsType,
        clientListCheck,
    },
    notifications: { notificationsCount },
}) => {
    let prev = ''

    useEffect(() => {
        if (clientListCheck === true) {
            if (clientsType === 'all') {
                getClientsListAll()
            }
            if (clientsType === 'pets') {
                getPetsOnlyFromClientsList()
            }
            if (clientsType === 'owners') {
                getOwnersOnlyFromClientsList()
            }
        }
    }, [
        getClientsListAll,
        getOwnersOnlyFromClientsList,
        getPetsOnlyFromClientsList,
        clientsType,
    ])

    return (
        <>
            <MetaTags
                defaultTitle={'Clients | Bodinga - Digital Medical Platform'}
                twitterTitle={'Clients | Bodinga - Digital Medical Platform'}
                twitterImageAlt={'Clients | Bodinga - Digital Medical Platform'}
                ogTitle={'Clients | Bodinga - Digital Medical Platform'}
                title={
                    <title>
                        {notificationsCount > 0
                            ? '(' + notificationsCount + ')'
                            : ''}{' '}
                        Clients &middot; Bodinga
                    </title>
                }
                link={'https://bodinga.com/vets/clients'}
                ogUrl={'https://bodinga.com/vets/clients'}
                description={
                    'ALl your clients in one place with individual profiles and metrics.'
                }
                twitterDescription={
                    'ALl your clients in one place with individual profiles and metrics.'
                }
                ogType={'website'}
                ogImageType={'image/png'}
                ogImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                msAppTileImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                twitterImage={'https://i.postimg.cc/W4xJRDvz/slash.png'}
                keywords={
                    'Bodinga, Clients, Profiles, Metrics, Software, Medical, Vets, Platform, Best, Free'
                }
            />
            <Navbar />
            <Sidebar />
            <div className={'main_container'}>
                <div className="">
                    <div className="flex_middle">
                        <PaneClientMain
                            style={{
                                position: 'relative',
                                zIndex: '100',
                            }}
                        />
                    </div>
                    {clientsListAllGetLoading ? (
                        <div className="app" style={{ padding: '2em 0 0 0' }}>
                            <ClientList letter={''} loading={true} />
                            <LoadingListCard />
                            <LoadingListCard />
                            <ClientList letter={''} />
                            <LoadingListCard />
                            <LoadingListCard />
                            <LoadingListCard />
                            <ClientList letter={''} />
                            <LoadingListCard />
                            <LoadingListCard />
                            <ClientList letter={''} />
                            <LoadingListCard />
                            <ClientList letter={''} />
                            <LoadingListCard />
                            <LoadingListCard />
                            <LoadingListCard />
                            <ClientList letter={''} />
                            <LoadingListCard />
                            <LoadingListCard />
                        </div>
                    ) : clientsList.length > 0 ? (
                        <>
                            {clientsList.map((value, index) => (
                                <div
                                    data-aos="fade-in"
                                    dat-aos-delay={`${index * 100}`}
                                    className="app"
                                >
                                    {prev !== value.first[0] ? (
                                        <>
                                            <ClientList
                                                letter={value.first[0].toUpperCase()}
                                            />
                                            {value.fifth === 'pet' && (
                                                <PetListCard
                                                    petName={value.first}
                                                    ownerID={value.second}
                                                    petSpecies={value.third}
                                                    petID={value.fourth}
                                                    index={index}
                                                    key={index}
                                                />
                                            )}
                                            {value.fifth === 'owner' && (
                                                <OwnerListCard
                                                    ownerName={value.first}
                                                    emailID={value.second}
                                                    mobileNo={value.third}
                                                    ownerID={value.fourth}
                                                    index={index}
                                                    key={index}
                                                />
                                            )}
                                            <div className="vanish">
                                                {
                                                    (prev =
                                                        value.first[0].toLowerCase())
                                                }
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {value.fifth === 'pet' && (
                                                <PetListCard
                                                    petName={value.first}
                                                    ownerID={value.second}
                                                    petSpecies={value.third}
                                                    petID={value.fourth}
                                                    index={index}
                                                    key={index}
                                                />
                                            )}
                                            {value.fifth === 'owner' && (
                                                <OwnerListCard
                                                    ownerName={value.first}
                                                    emailID={value.second}
                                                    mobileNo={value.third}
                                                    ownerID={value.fourth}
                                                    index={index}
                                                    key={index}
                                                />
                                            )}
                                        </>
                                    )}
                                </div>
                            ))}
                        </>
                    ) : (
                        <div style={{ marginTop: '200px' }}>
                            <NothingToShow
                                primaryMessage={'No Profiles'}
                                secondaryMessage={
                                    'Add some owner or pet profiles to get started!'
                                }
                            />
                        </div>
                    )}
                </div>
            </div>
            <Rightbar />
            <div className="clients_minimize_positioning">
                {clientsMinimizeTabs.map((element, index) => (
                    <>
                        {element === 'addOwnerEdit' && (
                            <EditOwner key={index} close={index} />
                        )}
                        {element === 'addPetEdit' && (
                            <EditPet key={index} close={index} />
                        )}
                    </>
                ))}
            </div>
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={editProfilesClientsLoading}
                    onClose={!editProfilesClientsLoading}
                    closeAfterTransition
                    BackdropProps={{
                        timeout: 500,
                        style: {
                            backgroundColor: 'rgba(0,0,0,0.8)',
                        },
                    }}
                >
                    <Fade in={editProfilesClientsLoading}>
                        <Box style={style}>
                            <Loader active inverted size="large" />
                        </Box>
                    </Fade>
                </Modal>
            </div>
            <Alerts />
            <ArrayMin />
        </>
    )
}

Clients.propTypes = {
    clients: PropTypes.object.isRequired,
    notifications: PropTypes.object.isRequired,
    getClientsListAll: PropTypes.func.isRequired,
    getOwnersOnlyFromClientsList: PropTypes.func.isRequired,
    getPetsOnlyFromClientsList: PropTypes.func.isRequired,
    deleteClientOwnerProfile: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    clients: state.clients,
    notifications: state.notifications,
})

const mapActionsToProps = {
    getOwnersOnlyFromClientsList,
    getPetsOnlyFromClientsList,
    getClientsListAll,
    deleteClientOwnerProfile,
}

export default connect(mapStateToProps, mapActionsToProps)(Clients)
