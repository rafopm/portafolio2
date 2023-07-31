import { Divider, Metric } from "@tremor/react";
import { BsTools } from "react-icons/bs";
import Styles from '../styles/Projects.module.css'

export default function Projects() {
  return (
    <div className={Styles.container}>
      <div className={Styles.tabs}>
        <div>
          <div className={Styles.titulo}><Metric className="dark:text-color-tertiary">Projects</Metric>
            <BsTools className="text-4xl dark:text-color-tertiary" />
          </div>
        </div>
        
      </div>
      <Divider className="mt-2 mb-3" />
    </div>
  )
}
