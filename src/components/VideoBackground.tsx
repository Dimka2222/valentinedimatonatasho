import { ReactNode } from 'react'
import '../index.css'

const VideoBackground = ({ children }: { children: ReactNode }) => {
    return (
        <div className="video-container">
            <video className="video-bg" autoPlay loop muted>
                <source src="../../public/tt.mp4" type="video/mp4" />
            </video>
            {children}
        </div>
    )
}

export default VideoBackground
