import { Segment, Container, List, Icon } from 'semantic-ui-react'
import styles from '../../styles/Footer.module.css'
import { useRouter } from 'next/router'
export default function Footer() {
  const router = useRouter()

  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <p> Arthur César </p>
          <Icon name="code" />
        </div>
        <List horizontal divided link size="small">
          <List.Item href="https://www.linkedin.com/in/arthur-c%C3%A9sar/">
            <Icon className={styles.icon} name="linkedin" />
          </List.Item>
          <List.Item href="https://github.com/nogueiraac">
            <Icon className={styles.icon} name="github" />
          </List.Item>
          <List.Item href="https://www.instagram.com/nogueir.ac">
            <Icon className={styles.icon} name="instagram" />
          </List.Item>
        </List>
      </div>
    </div>
  )
}
