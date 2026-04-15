import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

type TemperatureValue = number | string | null | undefined

type TemperatureStatsProps = {
  lastTemperature: TemperatureValue
  averageTemperature: TemperatureValue
}

function formatTemperature(value: TemperatureValue) {
  if (value === null || value === undefined) return "--"

  if (typeof value === "number") {
    if (!Number.isFinite(value)) return "--"
    return `${value.toFixed(1)}°`
  }

  const cleanValue = value.trim()
  return cleanValue.length > 0 ? cleanValue : "--"
}

export function TemperatureStats({
  lastTemperature,
  averageTemperature,
}: TemperatureStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <Card className="border border-emerald-500/25 bg-linear-to-br from-emerald-500/10 via-background to-background shadow-lg shadow-emerald-900/10">
        <CardHeader className="space-y-2">
          <CardDescription className="text-[11px] tracking-[0.18em] uppercase text-emerald-600/90">
            Last Temperature
          </CardDescription>
          <CardTitle className="text-3xl font-semibold tracking-tight tabular-nums">
            {formatTemperature(lastTemperature)}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-xs text-muted-foreground">
          Most recent sensor reading.
        </CardContent>
      </Card>

      <Card className="border border-cyan-500/25 bg-linear-to-br from-cyan-500/10 via-background to-background shadow-lg shadow-cyan-900/10">
        <CardHeader className="space-y-2">
          <CardDescription className="text-[11px] tracking-[0.18em] uppercase text-cyan-600/90">
            Average Temperature
          </CardDescription>
          <CardTitle className="text-3xl font-semibold tracking-tight tabular-nums">
            {formatTemperature(averageTemperature)}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-xs text-muted-foreground">
          Rolling average across collected data on the last hour.
        </CardContent>
      </Card>
    </div>
  )
}
