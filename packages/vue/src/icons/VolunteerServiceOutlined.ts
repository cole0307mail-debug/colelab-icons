// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VolunteerServiceOutlinedSvg from '@colelab/icons-svg/es/asn/VolunteerServiceOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VolunteerServiceOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VolunteerServiceOutlinedSvg }, slots);
  },
});
