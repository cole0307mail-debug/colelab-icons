// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import VolunteerServiceFilledSvg from '@colelab/icons-svg/es/asn/VolunteerServiceFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'VolunteerServiceFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: VolunteerServiceFilledSvg }, slots);
  },
});
