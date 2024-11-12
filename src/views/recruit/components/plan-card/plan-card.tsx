import { ApplyButton, GlassCard } from '@/components'

import * as css from './plan-card.module.scss'

interface Plan {
  name: string
  date: string
}

const PlanItem = ({ name, date }: Plan) => {
  return (
    <li className={css.item}>
      <h4 className={css.item_name}>{name}</h4>
      <p className={css.item_date}>{date}</p>
    </li>
  )
}

const renderPlans = (plans: Record<string, Plan>) =>
  Object.keys(plans).map((key) => <PlanItem key={key} name={plans[key].name} date={plans[key].date} />)

interface RenderCardProps {
  title: string
  plans: Record<string, Plan>
  showButton?: boolean
}

export const PlanCard = ({ title, plans, showButton = false }: RenderCardProps) => {
  return (
    <GlassCard extendClass={css.card}>
      <h3 className={css.card_title}>{title}</h3>
      <ul>{renderPlans(plans)}</ul>
      {showButton && (
        <ApplyButton className={css.card_button} availableDisabled>
          CMC 16기 지원하러 가기
        </ApplyButton>
      )}
    </GlassCard>
  )
}
