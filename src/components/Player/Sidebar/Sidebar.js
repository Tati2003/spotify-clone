import SidebarOption from "../SidebarOption.js/SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import "./Sidebar.css";
import { useDataLayerValue } from "../../../DataLayer";

export default function Sidebar(params) {
    const [{ playlists }, dispatch] = useDataLayerValue();
    return <div className="sidebar">
        <img
            className="sidebar_logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
        />
        <SidebarOption title="Home" Icon={HomeIcon} />
        <SidebarOption title="Search" Icon={SearchOutlinedIcon} />
        <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />

        <br />
        <p className="playlists_title">
            PLAYLISTS
        </p>
        <hr />
        {playlists?.items?.map(playlist => <SidebarOption title={playlist.name} />)

        }
        {/* <SidebarOption title="Trap" />
        <SidebarOption title="Pop" />
        <SidebarOption title="Rock" /> */}

    </div>
};
