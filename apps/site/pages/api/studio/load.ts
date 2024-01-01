import { checkSponsorAccess } from '@lib/getSponsorData'
import { protectApiRoute } from '@lib/protectApiRoute'
import { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  const { supabase, user } = await protectApiRoute({ req, res })
  const { teamId } = await checkSponsorAccess({
    req,
    res,
    supabase,
    throwIfNoAccess: true,
  })

  const results = await supabase
    .from('studio_themes')
    .select('*')
    .eq('team_id', teamId)
    .eq('user_id', user.id)

  if (results.error) {
    res.status(400).json({
      message: 'an error occurred.',
    })
    return
  }

  const response = {
    themeSuites: {},
  }

  for (const item of results.data) {
    response.themeSuites[item.id] = item.data
  }

  res.json(response)
}

export default handler
