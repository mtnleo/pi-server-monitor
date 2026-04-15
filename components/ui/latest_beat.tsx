import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type LatestBeatProps = {
  beatAt?: string | null
}

const ARGENTINA_TIMEZONE = "America/Argentina/Buenos_Aires"

function normalizeTimestamp(value: string) {
  const withT = value.replace(" ", "T")
  return withT.replace(/([+-]\d{2})$/, "$1:00")
}

function parseBeatTimestamp(value?: string | null) {
  if (!value) return null

  const cleanValue = value.trim()
  if (!cleanValue) return null

  const parsedDate = new Date(normalizeTimestamp(cleanValue))
  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate
}

function formatDate(date: Date) {
  const dateParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: ARGENTINA_TIMEZONE,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).formatToParts(date)

  const day = dateParts.find((part) => part.type === "day")?.value ?? "--"
  const month = dateParts.find((part) => part.type === "month")?.value ?? "--"
  const year = dateParts.find((part) => part.type === "year")?.value ?? "----"

  return `${day}-${month}-${year}`
}

function formatTime(date: Date) {
  const timeParts = new Intl.DateTimeFormat("en-GB", {
    timeZone: ARGENTINA_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date)

  const hour = timeParts.find((part) => part.type === "hour")?.value ?? "--"
  const minute = timeParts.find((part) => part.type === "minute")?.value ?? "--"

  return `${hour}:${minute}`
}

export function LatestBeat({ beatAt }: LatestBeatProps) {
  const parsedBeat = parseBeatTimestamp(beatAt)
  const dateText = parsedBeat ? formatDate(parsedBeat) : "--"
  const timeText = parsedBeat ? formatTime(parsedBeat) : "--:--"

  return (
    <Card className="border border-amber-500/25 bg-linear-to-br from-amber-500/10 via-background to-background shadow-lg shadow-amber-900/10">
      <CardHeader className="space-y-2">
        <CardDescription className="text-[11px] tracking-[0.18em] uppercase text-amber-700/90">
          Latest Beat
        </CardDescription>
        <CardTitle className="text-2xl font-semibold tracking-tight tabular-nums">
          {timeText}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground">
          Date: <span className="font-medium text-foreground/90 tabular-nums">{dateText}</span>
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Timezone: GMT-3 (Argentina)</p>
      </CardContent>
    </Card>
  )
}
