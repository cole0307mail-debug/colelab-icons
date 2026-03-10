// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DangerZoneFilledSvg from '@colelab/icons-svg/es/asn/DangerZoneFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DangerZoneFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DangerZoneFilledSvg }, slots);
  },
});
