import {Component} from 'react'

import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'

import {VscCircleFilled} from 'react-icons/vsc'
import {BiDislike, BiLike} from 'react-icons/bi'
import {CgPlayListAdd} from 'react-icons/cg'

import {formatDistanceToNow} from 'date-fns'

import SideBar from '../SideBar'
import Header from '../Header'
import LoaderBox from '../LoaderBox'
import FailureView from '../FailureView'

import NxtThemeContext from '../../Context'
import {
  VideoItemDetailsContainer,
  VideoItemAndSideBar,
  VideoContainer,
  VideoTitle,
  Video,
  SmallContainer,
  SmallDetails,
  HorizontalLine,
  LikeButton,
  ChannelLogo,
  Description,
} from './StyledComponents'

const apiStatus = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    status: apiStatus.loading,
    time: '',
    like: '',
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  toggleLike = () => {
    this.setState({like: 'like'})
  }

  toggleDisLike = () => {
    this.setState({like: 'disLike'})
  }

  getVideoDetails = async () => {
    this.setState({status: apiStatus.loading})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    console.log(url)
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const fetchedData = data.video_details
    if (response.ok) {
      const updatedData = {
        channel: {
          name: fetchedData.channel.name,
          profileImageUrl: fetchedData.channel.profile_image_url,
          subscriberCount: fetchedData.channel.subscriber_count,
        },
        description: fetchedData.description,
        id: fetchedData.id,
        publishedAt: fetchedData.published_at,
        thumbnailUrl: fetchedData.thumbnail_url,
        title: fetchedData.title,
        videoUrl: fetchedData.video_url,
        viewCount: fetchedData.view_count,
      }
      const a = formatDistanceToNow(new Date(updatedData.publishedAt)).split(
        ' ',
      )
      this.setState({
        videoDetails: updatedData,
        status: apiStatus.success,
        time: `${a[1]} ${a[2]} ago`,
      })
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  renderVideo = (theme, savedVideos, addToSavedVideos) => {
    const {videoDetails, time, like} = this.state
    const isSavedVideo = savedVideos.filter(
      eachItem => videoDetails.id === eachItem.id,
    )
    console.log(isSavedVideo)
    const save = isSavedVideo.length === 0 ? 'Save' : 'Saved'
    const isLiked = like === 'like' ? 'active' : ''
    const isDisLiked = like === 'disLike' ? 'active' : ''
    console.log(save)
    const onClickSave = () => {
      addToSavedVideos(videoDetails)
    }
    return (
      <VideoContainer theme={theme}>
        <Video>
          <ReactPlayer
            width="100%"
            height="100%"
            url={videoDetails.videoUrl}
            controls
          />
        </Video>
        <VideoTitle theme={theme}>{videoDetails.title}</VideoTitle>
        <SmallContainer spaceBetween>
          <SmallContainer>
            <SmallDetails>{videoDetails.viewCount} views</SmallDetails>
            <SmallDetails dot>
              <VscCircleFilled />
            </SmallDetails>
            <SmallDetails>{time}</SmallDetails>
          </SmallContainer>
          <SmallContainer>
            <LikeButton onClick={this.toggleLike} like={isLiked} type="button">
              <BiLike />
              <p>Like</p>
            </LikeButton>
            <LikeButton
              onClick={this.toggleDisLike}
              like={isDisLiked}
              type="button"
            >
              <BiDislike />
              <p>DisLike</p>
            </LikeButton>
            <LikeButton onClick={onClickSave} save={save} type="button">
              <CgPlayListAdd />
              <p>{save}</p>
            </LikeButton>
          </SmallContainer>
        </SmallContainer>
        <HorizontalLine />
        <SmallContainer>
          <ChannelLogo
            src={videoDetails.channel.profileImageUrl}
            alt="channel logo"
          />
          <SmallContainer column>
            <VideoTitle theme={theme}>{videoDetails.channel.name}</VideoTitle>
            <SmallDetails theme={theme}>
              {videoDetails.channel.subscriberCount} Subscribers
            </SmallDetails>
            <Description theme={theme}>{videoDetails.description}</Description>
          </SmallContainer>
        </SmallContainer>
      </VideoContainer>
    )
  }

  switchRender = (theme, savedVideos, addToSavedVideos) => {
    const {status} = this.state
    switch (status) {
      case 'LOADING':
        return <LoaderBox />
      case 'SUCCESS':
        return this.renderVideo(theme, savedVideos, addToSavedVideos)
      case 'FAILURE':
        return <FailureView />
      default:
        return null
    }
  }

  render() {
    return (
      <NxtThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedVideos, addToSavedVideos} = value
          return (
            <VideoItemDetailsContainer
              data-testid="videoItemDetails"
              theme={isDarkTheme}
            >
              <Header />
              <VideoItemAndSideBar>
                <SideBar />
                {this.switchRender(isDarkTheme, savedVideos, addToSavedVideos)}
              </VideoItemAndSideBar>
            </VideoItemDetailsContainer>
          )
        }}
      </NxtThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
