import { Chart } from 'chart.js/auto'
import slider from './slider.js'
import home from './home.js'

export default {
  mixins: [slider, home],

  data() {
    return {
      mostCompatible: [
        { id: 1, name: 'علياء سمير', role: 'مصممة UI/UX', skills: ['Figma', 'Sketch'], location: 'الإسكندرية', experience: 4 },
        { id: 2, name: 'سارة أحمد', role: 'Frontend', skills: ['Vue', 'CSS'], location: 'القاهرة', experience: 3 },
        { id: 3, name: 'علياء سمير', role: 'مصممة UI/UX', skills: ['Figma', 'Sketch'], location: 'الإسكندرية', experience: 4 },
        { id: 4, name: 'سارة أحمد', role: 'Frontend', skills: ['Vue', 'CSS'], location: 'القاهرة', experience: 3 },
      ],
      leastCompatible: [
        { id: 5, name: 'خالد محمود', role: 'Back-end', skills: ['Laravel', 'PHP'], location: 'الإسكندرية', experience: 2 },
        { id: 6, name: 'منى علي', role: 'DevOps', skills: ['Docker', 'Linux'], location: 'الجيزة', experience: 1 },
        { id: 7, name: 'خالد محمود', role: 'Back-end', skills: ['Laravel', 'PHP'], location: 'الإسكندرية', experience: 2 },
        { id: 8, name: 'منى علي', role: 'DevOps', skills: ['Docker', 'Linux'], location: 'الجيزة', experience: 1 },
      ],
      candidates: [
        { id: 1, name: 'أحمد حسن', job: 'مهندس', date: '2025-01-01', status: 'مراجعة', statusClass: 'gray' },
        { id: 2, name: 'ريم سالم', job: 'مصممة', date: '2025-02-01', status: 'مقبول', statusClass: 'green' },
        { id: 3, name: 'أحمد حسن', job: 'مهندس', date: '2025-01-01', status: 'مراجعة', statusClass: 'gray' },
        { id: 4, name: 'ريم سالم', job: 'مصممة', date: '2025-02-01', status: 'مقبول', statusClass: 'green' },
      ]
    }
  },

  async mounted() {
    const token = localStorage.getItem('token')

    if (!token) {
      this.$router.push('/login')
      return
    }

    const response = await fetch('http://127.0.0.1:8000/api/me', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    const data = await response.json()

    if (!response.ok) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/login')
      return
    }

    if (data.user.role !== 'company') {
      this.$router.push('/jobseeker-home')
      return
    }

    new Chart(document.getElementById('workChart'), {
      type: 'bar',
      data: {
        labels: ['4', '3', '2', '1'],
        datasets: [{ label: this.$t('companyHome.stats.trainees'), data: [80, 60, 65, 50] }]
      }
    })

    new Chart(document.getElementById('jobsChart'), {
      type: 'bar',
      data: {
        labels: ['4', '3', '2', '1'],
        datasets: [{ label: this.$t('companyHome.stats.jobs'), data: [170, 220, 120, 150] }]
      }
    })
  }
}