import 'semantic-ui-css/semantic.min.css'
import { Image, Header, Button, Icon } from 'semantic-ui-react'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.segment_content}>
      <div className={styles.main}>
        <div className={styles.main}>
          <Image
            src="/dog-icon.png"
            style={{ width: 'auto', height: 200 }}
            alt="Icon dog"
          />
          <Header>Dog API</Header>
        </div>
        <div style={{ marginTop: 30 }}>
          <Button onClick={() => router.push('/dogs')}>
            See the dogs
            <Icon name="chevron right" />
          </Button>
        </div>
      </div>
    </div>
  )
}
